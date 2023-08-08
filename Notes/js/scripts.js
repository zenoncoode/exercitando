// Elementos
const notesContainer = document.querySelector("#notes-container"); //container de adicionar as notas

const noteInput = document.querySelector("#note-content"); //campo de texto

const addNoteBtn = document.querySelector(".add-note"); //botao de + para adicionar nota

const searchInput = document.querySelector("#search-input"); //campo de busca

const exportBtn = document.querySelector("#export-notes"); //botao para exportar notas (csv)



// Funções
function showNotes() { //mostrar notas (mesmo após reiniciar a pagina, ele mostra todas as notas salvas)
  cleanNotes(); //limpa todas as notas

  getNotes().forEach((note) => { //chama a funcao getNotes que pega do local storage (faz para cada nota)
    const noteElement = createNote(note.id, note.content, note.fixed); //atribui a nota criada pelo create Note a variavel noteElement
    notesContainer.appendChild(noteElement); //encaixa o noteEelement (nota criada em html) dentro do notesContainer (container que contem todas as notas)
  });
}

function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]"); //atribui a variavel notes uma nota e seus atributos (pega da local storage), caso nao tenha nenhuma, ele devolve o array em branco

  const orderedNotes = notes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1)); //ordena as notas fixadas para virem primeiro
  //a comparacao é: recebe A e B (um item e outro item), se A.fixed (true ou false) é maior que o B.fixed (true é maior que false)
  
  return orderedNotes; //retorna as notas ja de forma ordenada
}

function cleanNotes() {
  notesContainer.replaceChildren([]); //substitui o array de notas por um array vazio (o filho do notesContainer contem todas as notas)
}

function saveNotes(notes) { //salva o array de notas notas no local storage
  localStorage.setItem("notes", JSON.stringify(notes)); //manda o array de objetos (notas) para o localStorage, para isso converte o array em JSON
}


function createNote(id, content, fixed) { //cria nota
  const element = document.createElement("div"); //cria a div

  element.classList.add("note"); //adiciona a class note na div

  const textarea = document.createElement("textarea"); //cria a tag <textarea></textarea> e atribui à variavel textarea

  textarea.value = content; //o valor da textarea vai ser igual ao conteudo passado como parametro na funcao 

  textarea.placeholder = "Adicione algum texto..."; //coloca o placeholder na textarea

  element.appendChild(textarea); //encaixa essa textarea dentro da div element

  if (fixed) { //se o elemento vier com o parametro fixed
    element.classList.add("fixed"); //adiciona a classe fixed na div elemento
  }

  const pinIcon = document.createElement("i"); //cria o elemento <i></i>

  pinIcon.classList.add(...["bi", "bi-pin"]); //adiciona a class bi bi-pin no icon para colocar o icone de pin

  element.appendChild(pinIcon); //encaixa o elemento i de icone na div element
  //faz a mesma coisa acima para os icones de deletar e copiar
  const deleteIcon = document.createElement("i"); //

  deleteIcon.classList.add(...["bi", "bi-x-lg"]); //

  element.appendChild(deleteIcon); //

  const duplicateIcon = document.createElement("i"); //

  duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"]); //

  element.appendChild(duplicateIcon); //vai ate aqui

  noteInput.value = " "; //limpa o campo de anotar



  
  // Eventos do elemento
  element.querySelector("textarea").addEventListener("keydown", () => { //evento disparado pela tecla digitada pelo usuario na textarea
    const noteContent = element.querySelector("textarea").value; //a varial noteContent recebe o valor da textarea
    updateNote(id, noteContent); //funcao que atualiza as notas no local storage
  });

  element.querySelector(".bi-x-lg").addEventListener("click", () => {//adiciona evento de click no icon de delete
    deleteNote(id, element); //chama a funcao de deletar passando o id (excluir a nota do storage) e o elemento (excluir a nota do dom para nao ter que chamar a showNotes)
  });

  element.querySelector(".bi-pin").addEventListener("click", () => { //adiciona evento de click no icon de pin
    toggleFixNote(id); //chama a funcao de fixar/desfixar nota passando o id de parametro
  });

  element.querySelector(".bi-file-earmark-plus").addEventListener("click", () => { //adiciona evento de click no icon de copiar
    copyNote(id); //chama a funcao de copiar nota passando o id de parametro
  });

  return element;
}

function addNote() { //funcao para adicionar nota
  const notes = getNotes(); 

  const noteInput = document.querySelector("#note-content"); 

  const noteObject = {
    id: generateId(), //o id da nota vai ser igual ao retorno da funcao generateId
    content: noteInput.value, //o conteudo da nota vai ser igual ao valor da variavel noteInput
    fixed: false, //a nota inicia como nao fixada
  };

  const noteElement = createNote(noteObject.id, noteObject.content); //O elemento nota vai ser criado em outra funcao, e o retorno vem aqui na variavel

  notesContainer.appendChild(noteElement); //encaixa o elemento nota dentro do nosso container de notas

  notes.push(noteObject); //da um push na local storage com os valores do objeto nota

  saveNotes(notes); //funcao para adicionar o objeto de nota na local storage
}

function generateId() { //gera um id de 1 a 5000 totalmente aleatorio
  return Math.floor(Math.random() * 5000);
}

function updateNote(id, newContent) { //funcao para atualizar as notas (editar)
  const notes = getNotes(); //a variavel notes recebe todas as notas
  const targetNote = notes.filter((note) => note.id === id)[0]; //a variavel targetNote recebe a nota que contem o mesmo id passado como parametro
  //o index é 0 por receber apenas um resultado no array, ja que o id é unico para cada nota
  targetNote.content = newContent; //o conteudo da nota é igual ao novo conteudo digitado (passado como parametro)

  saveNotes(notes); //funcao para adicionar o objeto de nota na local storage
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id); //a variavel notes recebe as notas filtradas pelo id (só inclui notas com o id diferente do que passamos)

  saveNotes(notes); //funcao para adicionar o objeto de nota na local storage

  notesContainer.removeChild(element); //remove o elemento de dentro do container de notas
}

function toggleFixNote(id) { //funcao para fixar notas
  const notes = getNotes(); //a variavel notes recebe o retorno da funcao getNotes (notas ordenadas)
  const targetNote = notes.filter((note) => note.id === id)[0]; //a variavel targetNote recebe a nota qual o id da nota seja igual ao da passada como parametro
 //o index é 0 por receber apenas um resultado no array, ja que o id é unico para cada nota
  targetNote.fixed = !targetNote.fixed; //caso nao estiver fixo ele fixa, caso estiver fixo ele desfixa
 //estamos acessando o parametro fixed que retorna true ou false
  saveNotes(notes); //funcao para adicionar o objeto de nota na local storage

  showNotes(); //funcao para mostrar as notas ja atualizadas
}

function searchNotes(search) { //funcao para filtrar notas com base na busca
  const searchResults = getNotes().filter((note) =>{ //a variavel seachResults recebe o valor da funcao filtro (arrow function) que recebeu note como parametro
    return note.content.includes(search) //filtrar para que o conteudo da nota inclui a string do search e retorna o resultado da funcao
  });

  if (search !== "") { //se search nao esta vazio
    cleanNotes(); //limpa todas as notas

    searchResults.forEach((note) => { //para cada nota que contenha a string search (digitada pelo usuario na busca)
      const noteElement = createNote(note.id, note.content);//criamos o elemento nota passando o id e o conteudo como parametro
      notesContainer.appendChild(noteElement); //encaixamos o elemento dentro do container de notas
    });

    return; //retorna após exibir tudo o que precisa
  }

  cleanNotes(); //limpa todas as notas

  showNotes(); //exibe todas as notas
}

function copyNote(id) { //funcao para copiar notas
  const notes = getNotes(); //a variavel notes recebe todas as notas
  const targetNote = notes.filter((note) => note.id === id)[0]; //a variavel targetNote recebe a nota que tenha o mesmo id que passamos como parametro
 //o index é 0 por receber apenas um resultado no array, ja que o id é unico para cada nota
  const noteObject = { //cria o objeto nota
    id: generateId(), //passa o id aleatorio como valor para o atributo id
    content: targetNote.content, //passa o conteudo da nota selecionada como valor para o atributo conteudo
    fixed: false, //a nova nota sempre começará nao fixada
  };

  //cria a nota com base no objeto que criamos acima
  const noteElement = createNote(noteObject.id, noteObject.content, false);

  notesContainer.appendChild(noteElement); //encaixa o elemento nota dentro do container de notas

  notes.push(noteObject); //da um push na local storage com os valores do objeto nota

  saveNotes(notes); //funcao para adicionar o objeto de nota na local storage
}

function exportData() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]"); //a variavel notes vai conter o array de notas da local storage em formato JSON

  //cria a variavel csvString que é um array que contem id, conteudo e se ele é fixado ou nao
  const csvString = [
    ["ID", "Conteúdo", "Fixado?"], //nome das colunas
    ...notes.map((note) => [note.id, note.content, note.fixed]), //inclui outros arrays referenciados aos valores das colunas
  ]
    .map((e) => e.join(",")) //separa os elementos por virgula
    .join("\n"); //coloca /n para pular a linha (move cada elemento para uma linha da tabela)

  const element = document.createElement("a"); //cria o elemento <a> (link)

  element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString); //coloca o link de dados 

  element.target = "_blank"; //clicar no botao de baixar csv abre uma nova aba

  element.download = "notasExportadas.csv"; //coloca o nome do arquivo de notasExportadas

  element.click(); //clica no elemento
}



// Eventos
addNoteBtn.addEventListener("click", () => addNote()); //evento de click para adicionar nota

searchInput.addEventListener("keyup", (e) => { //evento que é disparado pelo usuario digitando no buscar
  const search = e.target.value; //a variavel search recebe o valor digitado pelo usuario

  searchNotes(search); //funcao para buscar notas passando o conteudo digitado como parametro
});

noteInput.addEventListener("keydown", (e) => { //evento que é disparado pela tecla pressionada no input de nota
  if (e.key === "Enter") { //se o que ele digitou for igual a enter
    addNote(); //chama a funcao para adicionar a nota
  }
});

exportBtn.addEventListener("click", () => { //evento de click para exportar em csv
  exportData(); //chama a funcao de exportar as notas em csv
});

// Init
showNotes(); //inicia o programa mostrando as notas