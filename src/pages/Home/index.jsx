import { Container, Repositories } from "./styles";
import { useState } from "react";
import Swal from "sweetalert2";
import { InputGroup, Button, FormControl, Row, Col } from "react-bootstrap";
import Select from "../../components/SelectComponent/Select";
import api from "../../services/api";

export default function Home() {
  const [repository, setRepository] = useState([]);
  const [text, setText] = useState("");
  const [language, setLanguage] = useState([]);

  function handleText(e) {
    //Funcção para pegar oque o usuário digitou passado no on Change o valor irá mudar sempre que o usuário digitar algo.
    setText(e);
  }

  function handleLanguage(val) {
    //Funcção para pegar o valor do filtro para fazer buscas através da linguagem desejada
    setLanguage(val);
  }

  async function fetchRepositories() {
    //Função para buscar os repositórios na API do github
    try {
      // Aqui é feita a requisição para a api usando o axios(a "criação" da api do axios está na pasta services)
      const { data } = await api.get(`/repositories?q=${text}+language:${language.value}`);
      //a função setRepository do useState para colocar os valores buscados na api na variavel repository
      setRepository(data.items);
    } catch (err) {
      if (err.message) {
        //alerta caso ocorra algum erro ao buscar na api
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado!",
          footer: err.message,
        });
      }
    }
  }

  return (
    <Container>
      <h1>Explorar Repositórios</h1>
      <Row>
        <Col md={6}>
          <label>Pesquisar por repositório:</label>
          <InputGroup
            className="mb-3"
            label="Nome do repositório:"
            onChange={(e) => handleText(e.target.value)}
          >
            <Button
              variant="outline-secondary"
              id="button-addon1"
              className="btn btn-primary-outline"
              onClick={() => fetchRepositories()}
            >
              Pesquisar
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <label>Filtrar Linguagem</label>
          <Select
            label="Filtrar Linguagem"
            onChange={(val) => handleLanguage(val)}
          />
        </Col>
      </Row>
      <Row>
        {repository.map((repos) => (
          <Col lg={4} md={6} key={repos.id}>
            <Repositories>
              <strong>{repos.name}</strong>
              <h1>{repos.description}</h1>
              <h1>{repos.language}</h1>
              <a rel="noreferrer" target="_blank" href={repos.html_url}>
                Acessar Repositório
              </a>
            </Repositories>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
