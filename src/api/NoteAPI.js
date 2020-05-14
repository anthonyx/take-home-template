const URL = 'http://note.dev.cloud.lightform.com/notes'

const NoteAPI = {
  

  getNotes: async (page = 1) => {
    const results = await fetch(URL + `?page=${page}&limit=100`);
    const json = await results.json();
    
    return json._embedded.notes.reverse();
  },

  getNote: async (id) => {
      const results = await fetch(URL + `/` + id);
      const json = await results.json();
      
      return json;
  },

  createNote: async (title, body) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
    };

    try {
      const response = await fetch(URL, options);
      return response;
    } catch(err) {
      console.error(`ERROR: err`);
    }
  },

  deleteNote: async (id) => {
    const options = {
      method: 'DELETE'
    };

    try {  
      const response = await fetch(URL + '/' + id, options)
      return response;
    } catch(err) {
      console.error(`ERROR: err`);
    }
  },

  updateNote: async (id, title, body, callback) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
    };

    try {  
      const response = await fetch(URL + '/' + id, options)
      return response;
    } catch(err) {
      console.error(`ERROR: err`);
    }
  },

  // getToken: async () => {
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json' 
  //     },
  //     body: JSON.stringify({
  //       title: title,
  //       body: body
  //     })
  //   };

  //   try {
  //     const response = await fetch(URL, options);
  //     return response;
  //   } catch(err) {
  //     console.error(`ERROR: err`);
  //   }
  // },
};

export default NoteAPI