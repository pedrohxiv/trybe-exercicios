import "./App.css";
import PersonCard from "./components/PersonCard";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
import { PersonType } from "./types";

function App() {
  const { loading, error, data, refresh } = useFetch(
    "https://randomuser.me/api/"
  );

  const [approvals, setApprovals, clearApprovals] = useLocalStorage(
    "approvals",
    []
  );
  const [rejections, setRejections, clearRejections] = useLocalStorage(
    "rejections",
    []
  );

  const approvalsList = approvals as PersonType[];
  const rejectionsList = rejections as PersonType[];

  if (error)
    return (
      <main>
        <h1>Um erro inesperado aconteceu</h1>
      </main>
    );

  return (
    <main>
      {loading && <h1>Carregando...</h1>}
      {data.length > 0 && (
        <section>
          <section>
            <h1>Pessoas Aleatórias</h1>
            <PersonCard person={data[0]} />
            <button type="button" onClick={refresh}>
              ⏩ Próxima pessoa candidata
            </button>
            <button
              type="button"
              onClick={() => {
                setApprovals([...approvalsList, data[0]]);
                refresh();
              }}
            >
              ✅ Aprovar
            </button>
            <button
              type="button"
              onClick={() => {
                setRejections([...rejectionsList, data[0]]);
                refresh();
              }}
            >
              ❌ Reprovar
            </button>
          </section>
          <section>
            <h1>✅ Aprovadas</h1>
            <button type="button" onClick={clearApprovals}>
              Limpar
            </button>
            {approvalsList.map((person: PersonType) => (
              <PersonCard key={person.id.name} person={person} />
            ))}
          </section>
          <section>
            <h1>❌ Reprovadas</h1>
            <button type="button" onClick={clearRejections}>
              Limpar
            </button>
            {rejectionsList.map((person: PersonType) => (
              <PersonCard key={person.id.name} person={person} />
            ))}
          </section>
        </section>
      )}
    </main>
  );
}

export default App;
