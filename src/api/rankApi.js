import delay from './delay';

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (ranks) => {
  return Math.max.apply(Math, ranks.map((r) => { return r.rankId; })) + 1;
};

const getRanksApi = () => {
  const url = 'http://localhost/MartialArts/api/Rank';
  return fetch(url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const getRankById = (rankId) => {
  const url = `http://localhost/MartialArts/api/rank/${rankId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank by id response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const putRank = (rank) => {
  console.log('PUT:', rank);
  const url = `http://localhost/MartialArts/api/Rank/${rank.rankId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'PUT',
    body: JSON.stringify(rank),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const postRank = (rank) => {
  const url = 'http://localhost/MartialArts/api/Rank';
  return fetch(url, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(rank),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const deleteRankApi = (rankId) => {
  const url = `http://localhost/MartialArts/api/Rank/${rankId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'DELETE',
    body: JSON.stringify(rankId),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};


class RankApi {
  static getAllRanks() {
    return getRanksApi().then(ranks => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], ranks));
        }, delay);
      });
    });
  }

  static saveRank(rank) {
    rank = Object.assign({}, rank); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minRankAbbrvLength = 1;
      const minRankDescriptionLength = 3;
      if (rank.abbreviation.length < minRankAbbrvLength) {
        reject(`Rank Abbreviation must be at least ${minRankAbbrvLength} characters.`);
      }

      if (rank.description.length < minRankDescriptionLength) {
        reject(`Rank Description must be at least ${minRankDescriptionLength} characters.`);
      }

      if (rank.rankId) {
        putRank(rank).then((rank) => {
          resolve(rank);
        }).catch((message) => console.log('Rank ERROR:', message));
      } else {
        postRank(rank).then((rank) => {
          resolve(rank);
        });
      }
    });
  }

  static deleteRank(rankId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }

  static getRankDescription(rankId) {
    const ranks = this.getAllRanks();
    let description = { name: '', description: '', rankId: 0 };
    const descriptions = ranks.filter(r => r.id == rankId);
    if (descriptions) {
      description = descriptions[0];
      return description.name;
    }
    return "Rank Not Found";
  }
}

export default RankApi;
