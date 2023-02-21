import { Link, List, ListItem } from "@mui/material";
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
          <List
            style={{
              listStyle: "none",
            }}
          >
            {tabs.map((tab, idx) => (
              <ListItem
                sx={{
                  fontSize: "1rem",
                  padding: "0.5rem 0.3rem 0.5rem 0.3rem",
                  marginLeft: 0,
                  "&:hover": {
                    padding: "0.5rem 0rem 0.5rem 0.6rem",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
                key={idx}
              >
                <Link
                  href={tab.link}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": {
                      color: "#bcbaba",
                    },
                  }}
                >
                  {tab.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
