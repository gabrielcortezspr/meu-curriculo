

// Página principal do currículo, agora com estilos inline
// Edite à vontade para personalizar!

export default function Home() {
  return (
    <>
      <main
        style={{
          maxWidth: "",
          margin: "0 auto",
          padding: "2rem 1rem",
          color: "#fff",
          background: "rgba(21, 21, 21, 0.985)",
          borderRadius: "16px",
          boxShadow: "0 2px 32px 0 rgba(0, 0, 0, 1)",
          position: "relative",
          zIndex: 1,
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(255, 255, 255, 0.557)",
        }}
      >
        {/* Header / Nome */}
        <header style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Gabriel Cortez
          </h1>
          <p style={{ fontSize: "1.25rem", textAlign: "center", margin: 0 }}>
            Profissional de tecnologia apaixonado por qualidade, automação e inovação. <br />
          </p>
        </header>

        {/* Conteúdo principal do currículo */}
        
      </main>
      {/* Conteúdo fora da janela principal */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
          Este é o meu currículo, onde compartilho minha experiência e habilidades na área de tecnologia.
          Sinta-se à vontade para explorar e conhecer mais sobre mim!
        </p>
      </div>
    </>
  );
}



