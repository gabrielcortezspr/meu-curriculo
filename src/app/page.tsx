export default function Home() {
  return (
    <>
      <div>
        <header
          style={{
            height: "12rem",                      // Altura fixa do elemento (12 rem = aprox. 192px)
            margin: "0 auto",                     // Centraliza horizontalmente
            padding: "1rem 1rem",                 // Espaçamento interno (top/bottom e left/right)
            color: "#ffffffff",                       // Cor do texto (branco)
            background: "rgba(21, 21, 21, 0.9)",  // Cor de fundo escura com leve transparência
            borderRadius: "0px",                 // Sem bordas arredondadas
            boxShadow: "0 2px 32px 0 rgba(0, 0, 0, 1)", // Sombra para dar profundidade
            position: "relative",                // Necessário para elementos posicionados filhos
            zIndex: 3,                            // Posição na pilha de camadas (mais acima)
            backdropFilter: "blur(124px)",       // Efeito de desfoque no fundo (vidro fosco)
            WebkitBackdropFilter: "blur(32px)",  // Suporte ao desfoque para navegadores WebKit (Safari, etc.)
          }}
        >
          {/* Conteúdo do header */}
        </header>
      </div>

      <div>
        <main
          style={{
            height: "150vh",                 // Altura da seção (150% da altura da tela)
            width: "65%",                    // Largura relativa à tela
            margin: "0 auto",                // Centraliza horizontalmente
            padding: "1rem",                 // Espaçamento interno
            color: "#ffffffff",                // Cor do texto
            background: "rgba(80, 86, 91, 0.46)", // Cor de fundo com transparência
            borderRadius: "0px",             // Cantos retos (sem borda arredondada)
            boxShadow: "0 2px 32px 0 rgba(0, 0, 0, 1)", // Sombra para profundidade
            position: "relative",           // Necessário se usar elementos posicionados dentro
            zIndex: 1,                      // Ordem na pilha de camadas (quanto maior, mais acima)
            backdropFilter: "blur(64px)",   // Desfoque do fundo (efeito de vidro fosco)
            WebkitBackdropFilter: "blur(32px)", // Suporte para Safari
            // border: "1px solid rgba(255, 255, 255, 0.1)", // Borda opcional
          }}
        >
          {/* Quadrado branco posicionado sobre o main */}
          <div
            style={{
              position: "absolute",     // Posicionamento relativo ao <main>
              top: "2rem",              // Distância do topo
              left: "3rem",            // Distância da direita
              width: "300px",           // Largura do quadrado
              height: "300px",          // Altura do quadrado
              backgroundColor: "#fff",  // Cor branca
              borderRadius: "8px",      // Arredondamento (opcional)
              boxShadow: "0 2px 12px rgba(0,0,0,0.2)", // Sombra leve
              zIndex: 5,                // Acima do conteúdo interno
            }}
          />
          {/* Conteúdo principal */}
          <p>Este é o conteúdo principal da página.</p>
        </main> {/* AGORA está fechado corretamente */}
      </div>
    </>
  );
}
