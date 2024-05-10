import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';

export const mainnavbaritems = [
    {
        id: 0,
        icon: <HomeIcon />,
        lablel: 'Home',
        route: 'home'
    },
    {
        id: 1,
        icon: <AddIcon />,
        lablel: 'Create',
        route: 'create'
    },
    {
        id: 2,
        icon: <ListIcon />,
        lablel: 'Read',
        route: 'read'
    },
    {
        id: 3,
        icon: <EditIcon />,
        lablel: 'Update',
        route: 'update'
    },
    {
        id: 4,
        icon: <DeleteIcon />,
        lablel: 'Delete',
        route: 'delete'
    }

]