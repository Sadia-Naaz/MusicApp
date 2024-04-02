import { useSelector } from "react-redux";
import "../styles/sidebar.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export const Sidebar = forwardRef((props, ref) => {
    const [openModal, setOpenModal] = useState(false);

    useImperativeHandle(ref, () => {
        return { setOpenModal }
    });

    const likedSongs = useSelector((state) => state.likedSongs);
    console.log(likedSongs);
    if (!openModal) return null;

    return (
        <div className="sidebar-container">
          <span className="material-icons close" onClick={() => setOpenModal(false)}>close</span>
          <h1>Liked Songs <span className="material-icons like">favorite</span></h1>
          <div className="likedSongs"> 
            {
                likedSongs.map(songTitle =><ul><li key={songTitle}>{songTitle}</li></ul> )
            }
            </div>
        </div>
    );
});