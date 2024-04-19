import React, { useEffect, useState } from "react";
import Team from "../assets/fonts/ADMIN.svg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // Import the Firebase instance
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const TeamView = () => {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([
    {
      alt: "Remy Sharp",
      src: "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fkriti.jpg?alt=media&token=39ed6c31-7afc-4de4-b15f-c78079e36314",
      name: "Remy Sharp",
      styling: { position: "relative", top: 120, left: 110 },
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fkriti.jpg?alt=media&token=39ed6c31-7afc-4de4-b15f-c78079e36314",
      id: 1,
    },
    {
      alt: "Another Name",
      src: "https://mui.com/static/images/avatar/2.jpg",
      name: "Another Name",
      styling: { position: "relative", top: 50, left: 350 },
      imageUrl: "https://mui.com/static/images/avatar/2.jpg",
      id: 2,
    },
    {
      alt: "Another Name",
      src: "https://mui.com/static/images/avatar/2.jpg",
      name: "Another Name",
      styling: { position: "relative", top: 50, left: 570 },
      imageUrl: "https://mui.com/static/images/avatar/2.jpg",
      id: 3,
    },
    {
      alt: "Another Name",
      src: "https://mui.com/static/images/avatar/2.jpg",
      name: "Another Name",
      styling: { position: "relative", top: 200, left: 235 },
      imageUrl: "https://mui.com/static/images/avatar/2.jpg",
      id: 4,
    },
    {
      alt: "Another Name",
      src: "https://mui.com/static/images/avatar/2.jpg",
      name: "Another Name",
      styling: { position: "relative", top: 200, left: 470 },
      imageUrl: "https://mui.com/static/images/avatar/2.jpg",
      id: 5,
    },
    // {
    //   alt: "Another Name",
    //   src: "https://mui.com/static/images/avatar/1.jpg",
    //   name: "Another Name",
    //   styling: { position: "relative", top: 270, right: -680 },
    //   imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    //   id: 6,
    // },
    // {
    //   alt: "Another Name",
    //   src: "https://mui.com/static/images/avatar/2.jpg",
    //   name: "Another Name",
    //   styling: { position: "relative", top: 270, right: -680 },
    //   imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    //   id: 7,
    // },
    // {
    //   alt: "Another Name",
    //   src: "https://mui.com/static/images/avatar/2.jpg",
    //   name: "Another Name",
    //   styling: { position: "relative", top: 540, left: -220 },
    //   imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    //   id: 8,
    // },
    // {
    //   alt: "Another Name",
    //   src: "https://mui.com/static/images/avatar/2.jpg",
    //   name: "Another Name",
    //   styling: { position: "relative", top: 540, left: -79 },
    //   imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    //   id: 9,
    // },
    // Other avatars...
  ]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const newData = avatars.map((avatar, index) => {
          if (index >= 1 && index <= 4) {
            const doc = querySnapshot.docs[index - 1];
            const data = doc.exists && doc.data();
            return {
              ...avatar,
              src: data && data.status ? data.img : "",
            };
          } else {
            return avatar;
          }
        });
        setAvatars(newData);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    };

    fetchAvatars();
  }, []);

  const [duoData, setDuoData] = useState({ duo_first: "", duo_second: "" });

  const divStyle = {
    backgroundImage: `url(${Team})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  };

  const duo = {
    position: "absolute",
    top: 230,
    left: 990,
    zIndex: 1,
    color: "transparent",
    fontSize: "24px",
    padding: "40px",
    backgroundColor: "transparent",
  };

  const handleDuoClick = () => {
    navigate("/room/duo");
  };
  const handleQuadClick = () => {
    navigate("/room/meet");
  };

  useEffect(() => {
    const fetchDuo = async () => {
      try {
        const roomsRef = collection(db, "rooms");
        const duoDocRef = doc(roomsRef, "duo");
        const docSnap = await getDoc(duoDocRef);
        if (docSnap.exists()) {
          setDuoData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching duo:", error);
      }
    };

    fetchDuo();
  }, []);


  const [quadData, setQuadData] = useState({
    quad_first: "",
    quad_second: "",
    quad_third: "",
    quad_fourth: "",
  });

  useEffect(() => {
    const fetchQuad = async () => {
      try {
        const roomsRef = collection(db, "rooms");
        const quadDocRef = doc(roomsRef, "quad");
        const docSnap = await getDoc(quadDocRef);
        if (docSnap.exists()) {
          setQuadData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching quad:", error);
      }
    };

    fetchQuad();
  }, []);

const quad_div = {
  position: "absolute",
  top: 500,
  left: 150,
  zIndex: 1,
  color: "transparent",
  fontSize: "24px",
  padding: "80px",
  backgroundColor: "transparent",
};
  return (
    <>
      <div style={divStyle}>
        <div style={duo} onClick={handleDuoClick}>
          Hello
        </div>
        <div style={quad_div} onClick={handleQuadClick}>
HELLO
        </div>

        {/* DUO ROOOM DIV BELOW */}
        {duoData.duo_first !== "no" && (
          <div style={{ position: "absolute" }} id="duo_1">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              style={{ top: 270, left: 970 }}
            >
              <Avatar alt="Remy Sharp" src={duoData.duo_first} />
            </StyledBadge>
          </div>
        )}
        {duoData.duo_second !== "no" && (
          <div style={{ position: "absolute" }} id="duo_2">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              style={{ top: 270, left: 1050 }}
            >
              <Avatar alt="Remy Sharp" src={duoData.duo_second} />
            </StyledBadge>
          </div>
        )}

         {quadData.quad_first !== "no" && (
        <div style={{ position: "absolute" }} id="quad_1">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            style={{ top: 500, left: 150 }}
          >
            <Avatar
              alt="Remy Sharp"
              src={quadData.quad_first}
            />
          </StyledBadge>
        </div>
      )}
      {quadData.quad_second !== "no" && (
        <div style={{ position: "absolute" }} id="quad_2">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            style={{ top: 600, left: 150 }}
          >
            <Avatar
              alt="Remy Sharp"
              src={quadData.quad_second}
            />
          </StyledBadge>
        </div>
      )}
      {quadData.quad_third !== "no" && (
        <div style={{ position: "absolute" }} id="quad_3">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            style={{ top: 600, left: 250 }}
          >
            <Avatar
              alt="Remy Sharp"
              src={quadData.quad_third}
            />
          </StyledBadge>
        </div>
      )}
      {quadData.quad_fourth !== "no" && (
        <div style={{ position: "absolute" }} id="quad_4">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            style={{ top: 500, left: 250 }}
          >
            <Avatar
              alt="Remy Sharp"
              src={quadData.quad_fourth}
            />
          </StyledBadge>
        </div>
      )}

        <Stack direction="row" spacing={2}>
          {avatars.map((avatar) => (
            <div key={avatar.id} style={avatar.styling}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt={avatar.alt}
                  src={avatar.src}
                  name={avatar.name}
                  styling={avatar.styling}
                  imageUrl={avatar.imageUrl}
                  id={avatar.id}
                />
              </StyledBadge>
            </div>
          ))}
        </Stack>
      </div>
    </>
  );
};

export default TeamView;
