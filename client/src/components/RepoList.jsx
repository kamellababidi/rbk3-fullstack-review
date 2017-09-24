import React from 'react';

console.log('liiiist')
const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos} repos.
  </div>
)

export default RepoList;