import LinkContainer from "./components/LinkContainer"

//  Remove-Item -Path client\.git -Recurse -Force  removes the existing git repository thats keeping track of the files
//now we can initialize a new git repository and keep tracking of the files again
/*
this command touch .gitignore && echo "node_modules" >> .gitignore does not work in powershell it is unix basec command, this commands work with
git bash, this command basically creates a gitignore file if it dont already exist and put the node_mdoludes in there so its not trackedgit branch -M main
*/

function App(){

  return(
    <div>
      <LinkContainer />
    </div>
  )
}

export default App

