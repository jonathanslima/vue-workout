let userName = prompt('Type your github username.', '');
let user;

if(userName) user = userName;
else{
	alert('You need to type some username, try again!')
	window.location.href = './dashboard.html';
}


let res, starsOrder;
let getUserData = ()=>{
	fetch('https://api.github.com/users/' + user)
	.then(res => res.json())
	.then(function (json) {
		res = json;

		fillData.init();
		mountChartOne();
		mountChartTwo();
	})
	.catch(error => alert(`Some error: ${error}`));
};

let getUserRepos = ()=>{
	fetch('https://api.github.com/users/' + user + '/repos?per_page=100')
	.then(res => res.json())
    .then(function (json) {
    	res = json;
    	getDataRepo(res);
    	getLanguagesRepo(res);
    	sumStars(res);
    });
};

let getDataRepo = (res)=>{
	starsOrder = res.sort(function(a,b){
		return b.stargazers_count - a.stargazers_count;
	});

	res.map(function(i){console.log(i.stargazers_count)})
	mountChartThree(starsOrder);
};

let getLanguagesRepo = (res)=>{
	console.log(res)
	let javascript = 0, html = 0, css = 0, php = 0, typescript = 0, python = 0; other = 0, languages = '';

	res.map(function(i){
		switch(i.language ? i.language.toLowerCase() : 'other'){
			case 'html':
				html += 1;
				break;

			case 'css':
				css += 1;
				break;

			case 'php':
				php += 1;
				break;

			case 'javascript':
				javascript += 1;
				break;

			case 'typescript':
				typescript += 1;
				break;

			case 'python':
				python += 1;
				break;

			default:
				other += 1;
				break;
		}
	});

	languages = {
		'javascript': javascript, 
		'html': html, 
		'css': css, 
		'php': php, 
		'typescript': typescript, 
		'python': python,
		'other': other
	}

	mountChartFour(languages);
};

let sumStars = (res)=>{
	let sum = res.reduce( function( initVal, el ) {
	    return initVal + el.stargazers_count;
	}, 0 );

	document.querySelector('[data-stars="stars"]').textContent = sum;
};

const fillData = {
	fillCardDev: ()=>{
		document.querySelector('[data-img="dev"]').setAttribute('src', res.avatar_url);
		document.querySelector('[data-name="login"]').textContent = res.login;
		document.querySelector('[data-company="company"]').textContent = res.company;
		document.querySelector('[data-bio="bio"]').textContent = res.bio;
		document.querySelector('[data-local="local"]').textContent = res.location;
	},
	fillChartFollowers: ()=>{
		return res.followers;
	},
	fillChartFollowing: ()=>{
		return res.following;
	},
	fillPublicGists: ()=>{
		return res.public_gists;
	},
	fillPublicRepos: ()=>{
		document.querySelector('[data-repos="repos"]').textContent = res.public_repos;
		return res.public_repos;
	},
	init: ()=>{
		fillData.fillCardDev();
		fillData.fillPublicRepos();
	}
};

getUserData();
getUserRepos();
