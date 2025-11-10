import styles from "./Searching.module.css";

function Searching({ setSearchTerm }) {
  return (
    <div className={styles.search}>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="search"
        placeholder="Search..."
      />
    </div>
  );
}

export default Searching;
