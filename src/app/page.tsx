export default function Home() {
  return (
    <>
      <div className="HeaderContender">
        <header
          style={{
            height: "144px",
            margin: "0 auto",
            padding: "16px",
            color: "#ffffffff",
            background: "rgba(21, 21, 21, 0.9)",
            borderRadius: "0px",
            boxShadow: "0 2px 32px 0 rgba(0, 0, 0, 1)",
            position: "relative",
            zIndex: 3,
            backdropFilter: "blur(100px)",
            WebkitBackdropFilter: "blur(100px)",
          }}
        >
          {/* Conteúdo do header */}
        </header>
      </div>

      <div className="MainContender">
        <main
          style={{
            width: "1200px",
            minHeight: "150vh", // Ajuste para ocupar mais espaço vertical
            margin: "0 auto",
            padding: "16px",
            color: "#ffffffff",
            background: "rgba(148, 159, 167, 0.46)",
            borderRadius: "0px",
            boxShadow: "0 2px 32px 0 rgba(0, 0, 0, 1)",
            position: "relative",
            zIndex: 1,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >

          {/* Quadrado perfil (agora dentro do fluxo!) */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              alignItems: "flex-start", // ✅ alinha pelo topo
              gap: "16px",
              backgroundColor: "#1b1d1fdd",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
          >
            {/* Quadrado de perfil */}
            <div
              style={{
                width: "140px",
                height: "140px",
                backgroundColor: "#cccccc",
                borderRadius: "8px",
              }}
            ></div>

            {/* Texto ao lado */}
            <div style={{ color: "#ffffff" }}>
              <h2 style={{ margin: 0 }}>Gabriel Cortez</h2>
              <p style={{ margin: 0 }}>QA & Dev | Engenharia da Computação</p>
            </div>
          </div>

          {/* Aba estilo Steam */}
          <section
            style={{
              marginTop: "48px",
              backgroundColor: "#1b1d1fdd",
              padding: "24px",
              borderRadius: "12px",
              color: "#fff",
              boxShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h2 style={{ marginBottom: "16px", fontSize: "1.5rem" }}>Tech Collector</h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                backgroundColor: "#111",
                padding: "16px",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            >
              {[
                { label: "Projetos", value: 8 },
                { label: "Stacks", value: 4 },
                { label: "Contribuições", value: 12 },
                { label: "Repositórios", value: 25 },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: "bold" }}>{item.value}</div>
                  <div>{item.label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "8px" }}>
              <p style={{ marginBottom: "8px" }}>Destaques</p>
              <div style={{ display: "flex", gap: "12px" }}>
                {[1, 2, 3, 4].map(i => (
                  <img
                    key={i}
                    src={`/img${i}.png`}
                    style={{ width: "120px", height: "60px", objectFit: "cover", borderRadius: "6px" }}
                    alt={`Destaque ${i}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Atividades Recentes */}
          <section
            style={{
              marginTop: "32px",
              backgroundColor: "#1b1d1fdd",
              padding: "24px",
              borderRadius: "12px",
              color: "#fff",
              boxShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h2 style={{ marginBottom: "16px", fontSize: "1.5rem" }}>Atividades Recentes</h2>

            {/* Container vertical com gap */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#111",
                    borderRadius: "8px",
                    padding: "12px",
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    // REMOVA marginBottom aqui
                  }}
                >
                  {/* Conteúdo do card */}
                  <img
                    src={`/thumb${i + 1}.png`}
                    alt={`Projeto ${i + 1}`}
                    style={{ width: "120px", height: "60px", objectFit: "cover", borderRadius: "4px" }}
                  />
                  <div style={{ flex: 1 }}>
                    {/* resto do conteúdo */}
                  </div>
                </div>
              ))}
            </div>
          </section>


        </main>
      </div>
    </>
  );
}
