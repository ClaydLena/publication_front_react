import BasicTabs from './Tabs';
import LetterAvatars from './Avatar';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Home() {
  return (
    <div className="home">
      <div className='app-topbar'>
        <h4>Publication</h4>
        <IconButton><LetterAvatars/></IconButton>
      </div>

      <BasicTabs/>
      
      <Link to='/publicar'>
        <Fab color="primary" aria-label="add"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          
        >
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}

export default Home;