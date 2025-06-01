"use client";

import Image from "next/image";
import TypingEffect from "@/components/typingeffect";

export default function Home() {
  return (
    <div
      style={{
        //backgroundImage: "url('/background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <TypingEffect />

      <p
        style={{
          marginBottom: "40px",
          fontFamily: "monospace",
          paddingRight: 4,
          color: "black",
          fontSize: "4rem",
        }}
      >
      </p>
      <div>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            <a
              href="https://www.linkedin.com/in/rahul-kartha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="mailto:rahulkartha2002@gmail.com">
              <Image
                src="/images/black-gmail-icon.png"
                alt="Email"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/x-logo.jpg"
                alt="Twitter"
                width={40}
                height={40}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
