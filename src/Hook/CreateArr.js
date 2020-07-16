export const createArray = () => {
	const arr = [];
	for (let id = 0; id < 3; id++) {
    try {
      fetch(`http://api.jikan.moe/v3/manga/${id}`)
        .then((res) => res.json())
        .then((response) => {
          arr.push(response);
        })
    } catch (error) {
      arr.push(null)
      console.error();
    }
	}
	return arr;
};

console.log(createArray());

