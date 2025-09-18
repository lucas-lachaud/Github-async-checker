let current = 0;
let total = 0;

//inserer la clé ici
let githubToken = '';

// exemple clé github_pat_'numero'

function updateProgress(curr, tot, txt) {
    current = curr;
    total = tot;
    document.getElementById('progress-bar').value = (curr / tot) * 100;
    document.getElementById('progress-text').textContent = txt + ` ${curr} / ${tot}`;
}

async function checkLinkAlive(link) {
        const apiUrl = link.url.replace('https://github.com/', 'https://api.github.com/repos/');

        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'GitHub-Link-Checker'
            }
        };
        const response = await fetch(apiUrl, requestOptions);
        if (response.ok) {
            const data = await response.json();
            link.status = 'OK';
            link.currentStars = data.stargazers_count;
            link.starsDiff = data.stargazers_count - (link.stars || 0);
        } else {
            link.status = 'KO';
            link.currentStars = 0;
            link.starsDiff = 0;
        }
    return link;
}

function progressLinks(promises) {
    return promises.map(promise =>
        promise.then(result => {
            current++;
            updateProgress(current, total, 'Verification');
            return result;
        })
    );
}

async function downloadAndCheck() {
    const file = document.getElementById('file-selector').value;
        updateProgress(0, 1, 'Téléchargement');
        const response = await fetch(file);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        total = data.length;
        current = 0;
        updateProgress(0, total, 'Start');

        const promises = data.map(link => checkLinkAlive({...link}));
        const withProgress = progressLinks(promises);
        const results = await Promise.all(withProgress);

        updateProgress(total, total, 'Progress');
        showResults(results);
}

function showResults(results) {
    const div = document.getElementById('results');
    div.innerHTML = '';

    results.forEach(link => {
        const item = document.createElement('div');
        item.className = 'result ' + (link.status === 'OK' ? 'ok' : 'ko');

        let statusText = link.status;

        const diff = link.starsDiff > 0 ? `+${link.starsDiff}` : link.starsDiff;
        item.innerHTML = `${statusText} (${diff}⭐): <a href="${link.url}" text-decoration: underline;"> ${link.description} </a>`;
        div.appendChild(item);
    });
}
