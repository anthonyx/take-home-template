const URL = 'http://note.dev.cloud.lightform.com/notes';
const limit = 10;

const NoteAPI = {
  getNotes: async (page = 1) => {
    const queryParams = `?page=${page}&limit=${limit}`;
    const results = await fetch(URL + queryParams);
    const json = await results.json();

    console.log("total", json.total);
    
    const obj = {
      pages: Math.max(json.total / limit),
      notes: json._embedded.notes
    };

    return obj;
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