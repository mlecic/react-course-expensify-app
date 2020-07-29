import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h1>404: Page Not Found - <Link to="/">Go to Dashboard</Link></h1>
    </div>
);

export default NotFoundPage;