import axios from 'axios';


const mainUrl = 'https://749ad6cc-6129-4c5d-b84a-3d7592dc87cd.mock.pstmn.io'

const product = `${mainUrl}/GetProduct`


const urlPreparer = (cmd, id) => {
  if(cmd === 'product'){
    return `${product}/${id}`
  }
}

export const apiService =(method , cmd ,args, id ) =>{
  if (method === 'GET') {
		return new Promise((resolve, reject) => {
			(async () => {
				try {
					const res = await axios({
						method: 'get',
						url: urlPreparer(cmd, id),
						headers: {
							//cause cors error when call https from local
							'Content-Type': 'application/json',
						},
						params: { ...args },
					});

					const result = res.data;
					if (res.status === 200) {
						resolve([res.status, result]);
					} else {
						resolve(['380', 'network error2']);
					}
				} catch (err) {
					if (err.response) {
						if (err.response.status === 400) {
							resolve([400, 'Bad Request']);
						} else if (err.response.status === 401) {
							resolve([401, 'unAuthorized']);
						} else if (err.response.status === 404) {
							resolve([404, 'not found']);
						}
					} else {
						resolve(['381', 'Network error: ' + JSON.stringify(err)]);
					}
				}
			})();
		});
	}
}