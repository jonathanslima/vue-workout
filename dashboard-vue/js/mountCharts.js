let ctx1 = document.getElementById("Chart1").getContext('2d');
let ctx2 = document.getElementById("Chart2").getContext('2d');
let ctx3 = document.getElementById("Chart3").getContext('2d');
let ctx4 = document.getElementById("Chart4").getContext('2d');

const mountChartOne = ()=>{
	let Chart1 = new Chart(ctx1, {
	    type: 'pie',
	    data: {
	        labels: ["Repositories", 'Goal'],
	        datasets: [{
	            label: 'Repositories',
	            data: [fillData.fillPublicRepos(), 100 - fillData.fillPublicRepos()],
	            backgroundColor: [
	                'rgba(44, 62, 80, 1)',
	                'rgba(189, 195, 199, 1)'
	            ],
	            borderColor: [
	                'rgba(44, 62, 80, 1)',
	                'rgba(189, 195, 199, 1)'
	            ],
	            borderWidth: 1
	        }]
	    }
	});
};

const mountChartTwo = ()=>{
	let Chart2 = new Chart(ctx2, {
	    type: 'doughnut',
	    data: {
	        labels: ["Followers", 'Following'],
	        datasets: [{
	            label: '# of Votes',
	            data: [fillData.fillChartFollowers(), fillData.fillChartFollowing()],
	            backgroundColor: [
	                'rgba(124, 204, 99, 1)',
	                'rgba(44, 62, 80, 0.5)'
	            ],
	            borderColor: [
	                'rgba(124, 204, 99, 1)',
	                'rgba(44, 62, 80, 0.5)'
	            ],
	            borderWidth: 1
	        }]
	    }
	});
};

const mountChartThree = (starInfo)=>{
	let repoIn = starInfo;
	let Chart3 = new Chart(ctx3, {
	    type: 'line',
	    data: {
	        labels: [repoIn[0].name, repoIn[1].name, repoIn[2].name, repoIn[3].name, repoIn[4].name],
	        datasets: [{
	            label: 'Repo Stars',
	            data: [repoIn[0].stargazers_count, repoIn[1].stargazers_count, repoIn[2].stargazers_count, repoIn[3].stargazers_count, repoIn[4].stargazers_count],
	            backgroundColor: [
	                'rgba(75, 90, 107, 0.2)',
	                'rgba(69, 108, 99, 0.8)',
	                'rgba(120, 147, 81, 0.8)',
	                'rgba(169, 46, 69, 0.8)',
	                'rgba(244, 205, 64, 0.8)',
	            ],
	            borderColor: [
	                'rgba(75, 90, 107, 1)',
	                'rgba(69, 108, 99, 1)',
	                'rgba(120, 147, 81, 1)',
	                'rgba(169, 46, 69, 1)',
	                'rgba(244, 205, 64, 1)',
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true,
	                }
	            }]
	        }
	    }
	});
};

const mountChartFour = (lang)=>{
	let languages = lang;
	let Chart4 = new Chart(ctx4, {
	    type: 'bar',
	    data: {
	        labels: ['js', 'html', 'css', 'php', 'python', 'typescript', 'other'],
	        datasets: [{
	            label: 'Languages',
	            data: [languages.javascript, languages.html, languages.css, languages.php, languages.python, languages.typescript, languages.other],
	            backgroundColor: [
	                'rgba(52,12,103, 0.8)',
	                'rgba(229, 119, 26, 0.8)',
	                'rgba(254, 195, 6, 0.8)',
	                'rgba(98, 174, 231, 0.8)',
	                'rgba(171, 136, 180, 0.8)',
	                'rgba(30,176,39, 0.8)',
	                'rgba(169, 46, 69, 0.8)',
					'rgba(244, 205, 64, 0.8)',
	            ],
	            borderColor: [
	                'rgba(52,12,103, 1)',
	                'rgba(229, 119, 26, 1)',
	                'rgba(254, 195, 6, 1)',
	                'rgba(98, 174, 231, 1)',
	                'rgba(171, 136, 180, 1)',
	                'rgba(30,176,39, 1)',
	                'rgba(169, 46, 69, 1)',
					'rgba(244, 205, 64, 1)',
    			],
	            borderWidth: 1
	        }]
	    }
	});
};