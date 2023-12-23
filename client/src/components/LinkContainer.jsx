import React, { useState, useEffect } from "react";
import Table from './Table';
import Form from './Form';

function LinkContainer() {
    const [favLinks, setFavLinks] = useState([]);

    const handleRemove = async (id) => {
        try {
            // make a request to our server to delete the link
            const response = await fetch(`/api/links/${id}`, {
                method:'DELETE',
            });

            // check if the request was successful (status code 2xx)
            if (response.ok) {
                // remove the link from the state
                setFavLinks(favLinks.filter(link => link.id !== id));
            } else {
                // handle error if the request was not successful
                console.error('Failed to delete link');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const editLink = (id) => {
        const newName = window.prompt('Enter a new name:');
        const newURL = window.prompt('Enter the new URL:');
        handleUpdate(id, { name: newName, url: newURL });
    };


    const handleUpdate = async (id, updatedLink) => {
        try {
            // make a request to our server to update the link
            const response = await fetch(`/api/links/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedLink),
            });
    
    
            if (response.ok) {
                const updatedLink = await response.json();
                // update the state with the updated link
              setFavLinks(favLinks.map(link => link.id === id ? updatedLink : link));
              console.log(favLinks);
              getLinks();
              
            } else {
                // handle error if the request was not successful
                console.error('Failed to update link');
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleSubmit = async (favLink) => {
        try {
            // make a request to our server to add the new link
            const response = await fetch('/api/links', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(favLink),
            });
    
            // check if the request was successful (status code 2xx)
            if (response.ok) {
                // refetch the links
                getLinks();
            } else {
                // handle error if the request was not successful
                console.error('Failed to add link');
            }
        } catch (error) {
            console.error(error);
        }
    };
    


    const getLinks = async () => {
        try {
            // make a request to our server to get the links
            const response = await fetch('/api/links');
            // convert the response to json
            const data = await response.json();
            setFavLinks(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getLinks();
    }, []);

    return (
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table!</p>
            <Table linkData={favLinks} removeLink={handleRemove} editLink={editLink} />
            <h1>Add New</h1>
            <Form handleSubmit={handleSubmit} />
        </div>
    );
}

export default LinkContainer;
