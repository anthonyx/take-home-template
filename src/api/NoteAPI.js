const URL = 'http://note.dev.cloud.lightform.com/notes';
const limit = 12;

const NoteAPI = {
  getNotes: async (page = 1) => {
    const queryParams = `?page=${page}&limit=${limit}`;

    try {
      const results = await fetch(URL + queryParams);
      const json = await results.json();
      const obj = {
        pages: Math.ceil(json.total / limit),
        notes: json._embedded.notes
      };

      return obj;
    } catch(err) {
      console.error(`ERROR: err`);
    }
  },

  getNote: async (id) => {
    try {
      const results = await fetch(URL + `/` + id);
      const json = await results.json();
      
      return json;
    } catch(err) {
      console.error(`ERROR: err`);
    }
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
};

export default NoteAPI