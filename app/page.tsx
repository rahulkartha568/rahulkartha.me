import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/background-image.jpg')",
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
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Rahul Kartha</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "40px" }}>
        Explore my work and get to know me!
      </p>
      <div>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Contact Me</h2>
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
                src="app/images/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="mailto:rahulkartha2002@gmail.com">
              <Image
                src="app/images/black-gmail-icon.png"
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
                src="/twitter-icon.png"
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
