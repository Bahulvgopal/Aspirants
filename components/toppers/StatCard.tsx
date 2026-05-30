interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="stat-card">
      {icon && <span className="stat-card-icon" aria-hidden>{icon}</span>}
      <h3 className="stat-card-value">{value}</h3>
      <p className="stat-card-label">{label}</p>
      <div className="stat-card-bar" aria-hidden />
    </div>
  );
}