import { Misdemeanour, MISDEMEANOURS } from "../types/misdemeanours.types";
interface MisdemeanourFilterProps {
    filterKind: string;
    setFilterKind: React.Dispatch<React.SetStateAction<string>>;
};

const MisdemeanourFilter : React.FC<MisdemeanourFilterProps> = ({filterKind, setFilterKind}) => {
    const changeFilter = (value: string) => setFilterKind(value)

    return(
    <select id='filterMisdemeanourKind' defaultValue="" placeholder="Filter" onChange={(e) => changeFilter(e.target.value)}>
    <option value="" disabled>Filter</option>
    {MISDEMEANOURS.map((m, index) => <option key={'option' + index} value={m}>{m}</option>)}
    <option value="all">** show all **</option>
    </select>
    )
}

export default MisdemeanourFilter;