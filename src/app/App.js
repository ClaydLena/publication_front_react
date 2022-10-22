import './App.css';
import BasicTabs from '../components/Tabs';
import LetterAvatars from '../components/Avatar';
import { IconButton } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Publication from '../components/Writing';


function App() {
  return (
    <div className="App">
      <div className='app-topbar'>
        <h4>Publication</h4>
        <IconButton><LetterAvatars/></IconButton>
      </div>

      <BasicTabs/>
      <Fab color="primary" aria-label="add"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        href={<Publication/>}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
