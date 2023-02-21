import { Stack } from "@mui/system";

function App() {
  const tabs = [
    {
      name: "Blog",
      link: "https://blog.numnes.com",
    },
    {
      name: "Github",
      link: "https://github.com/matheusnunesismael",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/matheus-nunes-ismael-82675914b",
    },
  ];

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        bgcolor: "black",
        color: "white",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Stack
          sx={{
            minHeight: "80vh",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "1px solid white",
            padding: "0 1.5rem 0 1rem",
            fontSize: "1.5rem",
          }}
        >
          Matheus <br /> Nunes
          <br /> Ismael
        </Stack>
        <Stack>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {tabs.map((tab, idx) => (
              <li
                style={{
                  fontSize: "1rem",
                  padding: "0.5rem 0",
                }}
                key={idx}
              >
                <a
                  href={tab.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": {
                      color: "#bcbaba",
                    },
                  }}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
