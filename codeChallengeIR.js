'use strict';

class GitHubUser{
  constructor(username){
    this.username = username;
  }

  async fetchDetails(cb){
    let self = this;
    cb = cb || function(){};

    if(this.userData){
      setTimeout(()=>{
        cb(self.userData);
      },0);
    }else{
      let response = await fetch(`https://api.github.com/users/${this.username}`)
      let user = await response.json();
      user.then((data)=>{
        self.data = data;
        cb(data);
      })
    }

    async function getData(){
      let data = await fetchDetails();
      return data;
    }
  }
}

let octocat = new GitHubUser('octocat');

octocat.fetchDetails(data =>{console.log(data)});
