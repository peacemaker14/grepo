import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Enter a GitHub username..." />
      <button type="submit">Search</button>
    </div>
  );
}
