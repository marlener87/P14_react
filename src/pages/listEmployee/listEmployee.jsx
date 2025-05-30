import { useMemo, useState } from 'react';
import Navigation from '../../composants/navigation/nav';
import './listEmployee.scss';
import employeesData from '../../data/employeesData';
import { useSelector } from 'react-redux';


// composant principal qui reçoit une liste d'employés en props
const EmployeeTable = () => {
    const reduxEmployees = useSelector((state) => state.employee.list);

    // fusionne sans doublons : garde employeesData + uniquement les nouveaux de Redux
    const employees = useMemo(() => {
        const isDuplicate = (emp1, emp2) =>
            emp1.firstName === emp2.firstName &&
            emp1.lastName === emp2.lastName &&
            emp1.dateOfBirth === emp2.dateOfBirth;

        const uniqueRedux = reduxEmployees.filter(
            empRedux => !employeesData.some(empData => isDuplicate(empData, empRedux))
        );

        return [...employeesData, ...uniqueRedux];
    }, [reduxEmployees]);

    // état pour la recherche dans le tableau
    const [search, setSearch] = useState('');
    // page actuelle pour la pagination
    const [currentPage, setCurrentPage] = useState(1);
    // nb d'entrées à afficher par page
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    // état pour le tri des colonnes
    const [sortConfig, setSortConfig] = useState({ key: 'firstName', direction: 'asc' } );

    //const employees = employeesData;

    // filtre ne fonction de la recherche
    const filteredEmployees = useMemo(() => {
        return employees.filter(emp =>
            Object.values(emp).some(val =>
                String(val).toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [employees, search]);

    //tri des données selon la colonne cliquée
    const sortedEmployees = useMemo(() => {
        let sortable = [...filteredEmployees];
        if (sortConfig) {
            sortable.sort((a, b) => {
                const aVal = a[sortConfig.key];
                const bVal = b[sortConfig.key];
                if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortable;
    }, [filteredEmployees, sortConfig]);

    // découpage des données pour la pagination
    const indexOfLast = currentPage * entriesPerPage;
    const indexOfFirst = indexOfLast - entriesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredEmployees.length / entriesPerPage);

    // gestion du tri (ascendant/descendant)
    const handleSort = key => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return (
        <>
        <Navigation></Navigation>

        <div className="employeeTable">
            {/* barre de contrôle : choix du nombre d'entrées et recherche */}
            <div className="controls">
                <label>Show 
                    <select value={entriesPerPage} onChange={e => setEntriesPerPage(Number(e.target.value))}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>    
                    entries
                </label>
                <input 
                    type="text"
                    placeholder='Search'
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                        setCurrentPage(1); /* Revenir à la page 1 lors d'une nouvelle recherche} */}}
                />
            </div>
        </div>
        
        {/* Le tableau des employés */}
        <table>
            <thead>
            <tr>
                {/* Entêtes de colonnes cliquables pour trier */}
                {['firstName', 'lastName', 'startDate', 'department', 'dateOfBirth', 'street', 'city', 'state'].map(col => (
                <th key={col} onClick={() => handleSort(col)}>
                    {col.replace(/([A-Z])/g, ' $1')} {/* Ajout d'espace dans les camelCase */}
                    {sortConfig.key === col ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {/* Affichage des lignes d'employés filtrées et triées */}
            {currentEmployees.map((emp, index) => (
                <tr key={index}>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.startDate}</td>
                <td>{emp.department}</td>
                <td>{emp.dateOfBirth}</td>
                <td>{emp.street}</td>
                <td>{emp.city}</td>
                <td>{emp.state}</td>
                </tr>
            ))}
            </tbody>
        </table>

        {/* Pagination simple */}
        <div className="pagination">
            <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            >
            Previous
            </button>
            <span>{currentPage}</span>
            <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            >
            Next
            </button>
        </div>
        </>
    )
}

export default EmployeeTable;