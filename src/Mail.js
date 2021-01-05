import { IconButton } from '@material-ui/core';
import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EmailIcon from '@material-ui/icons/Email';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Mail.css'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';


function Mail() {
    const history =useHistory();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
         <div className="mail__tools">
             <div className="tools__Left">
                    <IconButton onClick = {()=>history.push("/")}>
                        <ArrowBackIcon  />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon  />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon  />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

             </div>
             <div className="tools__Right">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>

             </div>
         </div>
         <div className="mail__body">
             <div className="mail__bodyHeader">
                 <h2> {selectedMail?.subject}</h2>
                 <LabelImportantIcon className="mail__important"/>
                
                 <p>{selectedMail?.title}</p>

                 <p className="mail__time">{selectedMail?.time}</p>
             </div>

             <div className="mail__message">
            <p>{selectedMail?.description}</p>
             </div>
         </div>
        </div>
    );
}

export default Mail;