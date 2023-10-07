import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import {
  VideoCameraIcon,
  EmojiHappyIcon,
  CameraIcon,
} from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { db , storage } from "././../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filepicker = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts").add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(doc => {
        if(imageToPost) {
            const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost , 'data_url')
            removeImage()
            uploadTask.on(
                "state_change" , null , (error) => console.error(error),
                () => {
                    storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                        db.collection('posts').doc(doc.id).set({
                            postImage: url
                        }, {merge: true})
                    })
                }
            )
        }
    });

    inputRef.current.value = "";
  };
  const addImagetoPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
        console.log('hey')
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null)
  }
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center">
        <Image
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />

        <form className="flex flex-1">
          <input
            className="rounded-full h-12 px-5 focus:outline-none bg-gray-100 flex-grow"
            type="text"
            ref={inputRef}
            placeholder={`what's in your mind , ${session.user.name} ?`}
          />
          <button hidden type="submit" onClick={sendPost} className="">
            Submit
          </button>
          {
            imageToPost && (
                <div onClick={removeImage} className="transition duration-150 flex flex-col filter hover:brightness-110 transform hover:scale-105 cursor-pointer ">
                    <img className ="h-10 object-contain" alt="" src={imageToPost} />
                    <p className="text-xs text-red-500 text-center" >Remove</p>
                </div>
            )
          }
        </form>
      </div>
      <div className="flex justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div onClick={() => filepicker.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            hidden
            ref={filepicker}
            onChange={addImagetoPost}
            type="file"
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
