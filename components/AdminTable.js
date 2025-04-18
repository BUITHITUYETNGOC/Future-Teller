import styles from '../styles/Admin.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AdminTable = ({ data, table, onEdit, onDelete }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>Không có dữ liệu để hiển thị.</p>;
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>STT</th>
              {table === 'times' || table === 'majors' || table === 'technologies' || table === 'impacts' || table === 'outlines' ? (
                <>
                  {table === 'outlines' && (
                    <>
                      <th>Bước</th>
                      <th>Thời gian</th>
                      <th>Tiêu đề</th>
                      <th>Emoji</th>
                    </>
                  )}
                  {table !== 'outlines' && (
                    <th>
                      {table === 'times' ? 'Thời điểm' : table === 'majors' ? 'Ngành' : table === 'technologies' ? 'Công nghệ' : table === 'impacts' ? 'Tác động' : ''}
                    </th>
                  )}
                </>
              ) : null}
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                {table === 'times' || table === 'majors' || table === 'technologies' || table === 'impacts' || table === 'outlines' ? (
                  <>
                    {table === 'outlines' && (
                      <>
                        <td>{item.step}</td>
                        <td>{item.time}</td>
                        <td>{item.title}</td>
                        <td>
                          {item.emoji ? (
                            <span style={{ fontSize: '20px' }}>{item.emoji}</span>
                          ) : (
                            '-'
                          )}
                        </td>
                      </>
                    )}
                    {table !== 'outlines' && (
                      <td>{item.title}</td>
                    )}
                  </>
                ) : null}
                <td className={styles.actionCell}>
                  <button className={styles.editButton} onClick={() => onEdit(item)}>
                    <FaEdit className={styles.buttonIcon} /> Sửa
                  </button>
                  <button className={styles.deleteButton} onClick={() => onDelete(item.id)}>
                    <FaTrash className={styles.buttonIcon} /> Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;