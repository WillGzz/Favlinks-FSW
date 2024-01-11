import React from "react";

function TableHeader() {
    return (
        <thead>
            <tr>
                <th id="th-name">Name</th>
                <th id="th-URL">URL</th>
                <th id="th-remove">Remove</th>
                <th id="th-edit">Edit</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.linkData.map((row) => (
        <tr key={row.id}>
            <td id="row-name">{row.name}</td>
            <td id="row-URL">
                <a href={row.url} target="_blank">{row.url}</a>
            </td>
            <td>
                <button id="delete-button" onClick={() => props.removeLink(row.id)}>
                    Delete
                </button>
            </td>
            <td>
            <button className="edit-button"  onClick={() => props.editLink(row.id)}>
                    Edit
          </button>
            </td>
        </tr>
    ));

    return <tbody>{rows}</tbody>;
};

function Table({ linkData, removeLink, editLink }) {
    return (
        <table>
            <TableHeader />
            <TableBody linkData={linkData} removeLink={removeLink} editLink={editLink}  />
        </table>
    );
}

export default Table;
