async function createArray() {
	const baseURL = 'http://api.jikan.moe/v3/manga/';
	const arr = [];
	try {
		for (let i = 1; i <= 5; i++) {
        const res = await (await fetch(`${baseURL}${i}`)).json();
        if (res.status !== 404 && res.status !== '429') {
          arr.push(res);
        }
		}
	} catch (err) {
		console.error(err);
	}
	return arr;
}

export default createArray;