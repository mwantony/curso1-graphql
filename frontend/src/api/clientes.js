import { api } from "./config";

const listarClientes = () =>
  fetch(`http://localhost:4000`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: "{clientes {nome cpf}}" }),
  }).then(resposta => resposta.json()).then(dados => {
    console.log(dados)
    return []
  })
const buscarClientePorId = (id) =>
  api.get(`/clientes/cliente/${id}`).then((resposta) => resposta.data[0]);

const adicionarCliente = (cliente) =>
  api.post("/clientes/cliente", cliente).then((resposta) => resposta.data);

const alterarCliente = (id, cliente) =>
  api.put(`/clientes/cliente/${id}`, cliente).then((resposta) => resposta.data);

const removerCliente = (id) =>
  api.delete(`/clientes/cliente/${id}`).then((resposta) => resposta.data);

export default {
  listarClientes,
  buscarClientePorId,
  adicionarCliente,
  alterarCliente,
  removerCliente,
};
