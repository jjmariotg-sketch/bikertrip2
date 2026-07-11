import React, { useState, useEffect } from "react";
import { fetchPhotos, addPhoto, deletePhoto, Photo } from "../lib/firebase";
import { Camera, Image as ImageIcon, Trash2, X, Plus } from "lucide-react";
import { translations } from "../lib/translations";

interface PhotosViewProps {
  currentUser: any;
  lang: 'es' | 'en' | 'fr';
  isAdmin: boolean;
  isDashboardMode?: boolean;
}

export default function PhotosView({ currentUser, lang, isAdmin, isDashboardMode = false }: PhotosViewProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  
  const t = (key: string) => translations[lang][key] || key;
  
  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    setLoading(true);
    try {
      const dbPhotos = await fetchPhotos() || [];
      const demoPhotosStr = localStorage.getItem("demo_photos");
      const demoPhotos: Photo[] = demoPhotosStr ? JSON.parse(demoPhotosStr) : [];
      const combined = [...demoPhotos, ...dbPhotos];
      combined.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setPhotos(combined);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 700 * 1024) {
        alert("La imagen es demasiado grande. Por favor sube una imagen de menos de 700KB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !selectedImage || !caption.trim()) return;
    
    setIsUploading(true);
    try {
      const newPhoto: Photo = {
        userId: currentUser.uid,
        userName: currentUser.displayName || "Anónimo",
        image: selectedImage,
        caption: caption.trim(),
        createdAt: new Date().toISOString()
      };
      
      const isDemoUser = currentUser.uid === "demo-jjmario-123" || currentUser.uid === "demo-admin-uid" || !currentUser.email;
      
      if (isDemoUser) {
        const demoPhotosStr = localStorage.getItem("demo_photos");
        const demoPhotos: Photo[] = demoPhotosStr ? JSON.parse(demoPhotosStr) : [];
        const photoWithId = { ...newPhoto, id: `demo-photo-${Date.now()}` };
        localStorage.setItem("demo_photos", JSON.stringify([photoWithId, ...demoPhotos]));
        setSelectedImage(null);
        setCaption("");
        await loadPhotos();
      } else {
        await addPhoto(newPhoto);
        setSelectedImage(null);
        setCaption("");
        await loadPhotos();
      }
    } catch (err) {
      console.error("Error uploading photo:", err);
      alert("Hubo un error al subir la foto.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (photoId: string) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta foto?")) return;
    try {
      if (photoId.startsWith("demo-photo-")) {
        const demoPhotosStr = localStorage.getItem("demo_photos");
        const demoPhotos: Photo[] = demoPhotosStr ? JSON.parse(demoPhotosStr) : [];
        const updated = demoPhotos.filter(p => p.id !== photoId);
        localStorage.setItem("demo_photos", JSON.stringify(updated));
        setPhotos(photos.filter(p => p.id !== photoId));
      } else {
        await deletePhoto(photoId);
        setPhotos(photos.filter(p => p.id !== photoId));
      }
    } catch (err) {
      console.error("Error deleting photo:", err);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-display font-extrabold text-3xl text-white tracking-tight flex items-center gap-3">
            <Camera className="w-8 h-8 text-primary" />
            {lang === 'es' ? 'Galería de Viajes' : lang === 'fr' ? 'Galerie de Voyages' : 'Travel Gallery'}
          </h2>
          <p className="text-sm text-on-surface-variant mt-2 max-w-xl">
            {lang === 'es' ? 'Comparte tus mejores momentos en ruta. Sube fotos de tus expediciones y cuéntanos sobre ellas.' : 
             lang === 'fr' ? 'Partagez vos meilleurs moments sur la route. Téléchargez des photos de vos expéditions.' :
             'Share your best moments on the road. Upload photos of your expeditions and tell us about them.'}
          </p>
        </div>
      </div>

      {!currentUser ? (
        <div className="glass-panel p-6 rounded-3xl border border-glass-border bg-surface-container/30 text-center">
          <Camera className="w-10 h-10 text-primary/40 mx-auto mb-3" />
          <p className="text-sm text-on-surface-variant">
            {lang === 'es' ? 'Inicia sesión o usa el modo Demo para compartir tus fotos en la galería de viajes.' : 
             lang === 'fr' ? 'Connectez-vous ou utilisez le mode Démo pour partager vos photos dans la galerie.' :
             'Log in or use Demo mode to share your photos in the travel gallery.'}
          </p>
        </div>
      ) : (
        <div className="glass-panel p-6 rounded-3xl border border-glass-border bg-surface-container-low">
          <form onSubmit={handleUpload} className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              <Plus className="w-5 h-5 text-primary" />
              {lang === 'es' ? 'Subir nueva foto' : lang === 'fr' ? 'Télécharger une nouvelle photo' : 'Upload new photo'}
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 flex flex-col gap-2">
                {selectedImage ? (
                  <div className="relative aspect-video md:aspect-square bg-surface-container rounded-2xl overflow-hidden border border-glass-border group">
                    <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      type="button" 
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center aspect-video md:aspect-square bg-surface-container hover:bg-surface-container-high border-2 border-dashed border-glass-border hover:border-primary/50 rounded-2xl cursor-pointer transition-all">
                    <ImageIcon className="w-8 h-8 text-on-surface-variant/50 mb-2" />
                    <span className="text-xs text-on-surface-variant font-medium">Seleccionar Imagen</span>
                    <span className="text-[10px] text-on-surface-variant/50 mt-1">Máx 700KB</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="hidden" 
                    />
                  </label>
                )}
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold font-mono text-on-surface-variant/90 uppercase tracking-wider block">
                    {lang === 'es' ? 'Pie de foto' : lang === 'fr' ? 'Légende' : 'Caption'}
                  </label>
                  <textarea
                    required
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder={lang === 'es' ? 'Escribe un comentario sobre esta foto...' : lang === 'fr' ? 'Écrivez un commentaire sur cette photo...' : 'Write a comment about this photo...'}
                    className="w-full h-24 bg-slate-900 border border-glass-border focus:border-primary focus:ring-1 focus:ring-primary text-sm text-white px-4 py-3 rounded-2xl outline-none transition-all resize-none placeholder:text-on-surface-variant/45"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isUploading || !selectedImage || !caption.trim()}
                  className="w-full md:w-auto self-end py-2.5 px-6 bg-primary text-[#0F1115] hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:opacity-50 text-xs font-bold rounded-xl uppercase tracking-wider glow-btn transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isUploading ? (
                    <div className="w-4 h-4 border-2 border-[#0F1115] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Camera className="w-4 h-4" />
                      {lang === 'es' ? 'Publicar Foto' : lang === 'fr' ? 'Publier la Photo' : 'Publish Photo'}
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      ) : photos.length > 0 ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <div key={photo.id} className="break-inside-avoid glass-panel rounded-2xl overflow-hidden border border-glass-border bg-surface-container-low group relative">
              <img src={photo.image} alt={photo.caption} className="w-full h-auto object-cover" />
              <div className="p-4 bg-gradient-to-t from-[#16191F] to-[#16191F]/80">
                <p className="text-sm text-white leading-relaxed mb-3">"{photo.caption}"</p>
                <div className="flex justify-between items-center text-xs text-on-surface-variant/70 font-mono">
                  <span>@{photo.userName}</span>
                  <span>{new Date(photo.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              {(isAdmin || (currentUser && photo.userId === currentUser.uid)) && (
                <button
                  onClick={() => handleDelete(photo.id!)}
                  className="absolute top-3 right-3 p-2 bg-red-500/80 hover:bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer"
                  title="Eliminar foto"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass-panel rounded-3xl border border-glass-border bg-surface-container/30">
          <ImageIcon className="w-16 h-16 text-on-surface-variant/20 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">No hay fotos todavía</h3>
          <p className="text-sm text-on-surface-variant/70">Sé el primero en compartir una foto de tu viaje.</p>
        </div>
      )}
    </div>
  );
}
