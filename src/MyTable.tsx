import React from "react";


export const MyTable = () => {
    const tableData = [
        { firstName: 'Divya', lastName: 'Singh' },
        { firstName: 'Pankaj', lastName: 'Chaudhary' },
        { firstName: 'Pavya', lastName: 'Chaudhary' },
    ];
    const tableBody = tableData.map((row, index) => (
        <tr key={index}>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
        </tr>
    ));
    return <div>
        <h1>Render table from multi-array</h1>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    </div>;
};
