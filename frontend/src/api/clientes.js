import { api, opcoesFetch } from "./config";

const listarClientes = () =>
  fetch(`http://localhost:4000`, opcoesFetch("{clientes {nome cpf}}"))
    .then((resposta) => resposta.json())
    .then((dados) => {
      return dados.data.clientes;
    });
const buscarClientePorId = (id) =>
  api.get(`/clientes/cliente/${id}`).then((resposta) => resposta.data[0]);

const adicionarCliente = (cliente) =>
  fetch(
    `http://localhost:4000`,
    opcoesFetch(
      `mutation {adicionarCliente(nome: "${cliente.nome}", cpf: "${cliente.cpf}") {nome cpf}}`
    )
  ).then((resposta) => resposta.json())
  .then((dados) => {
    return dados.data.adicionarCliente;
  })

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
