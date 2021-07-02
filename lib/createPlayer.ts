interface PlayerDeatil {
	id: number;
	name: string;
	number: number;
	pos: string;
	grid: string | null;
}
export const createPlayer = (detail: PlayerDeatil[], home: boolean) => {
	detail.forEach(player => {
		const row = player.grid?.split(':');
		if (!row) return;
		const shit = document.querySelector(`#row-${home ? 'h' : 'a'}-${row[0]}`);

		const newPlayer = document.createElement('div');
		newPlayer.innerHTML = `
      <p>${player.number} ${player.name}</p>
    `;
		newPlayer.style.gridRow = `${+row[1]}/${+row[1] + 1}`;
		newPlayer.style.transform = `${home ? '' : 'rotate(180deg)'}`;
		shit?.appendChild(newPlayer);
	});
};
