import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Rahul Kartha</h1>
      <p>Explore my work and get to know me!</p>
      <div>
        <h2>Contact Me</h2>
        <ul
          style={{
            display: "flex",
            gap: "10px",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </a>
          </li>
          <li>
            <a href="mailto:your-email@example.com">
              <Image src="/email-icon.png" alt="Email" width={32} height={32} />
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
                width={32}
                height={32}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
