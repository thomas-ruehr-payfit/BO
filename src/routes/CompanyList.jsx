import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { COMPANIES, ORG_NAME } from '@/lib/data'

const STATUS_DOT = {
  active:   'bg-status-active',
  inactive: 'bg-status-disabled',
}

const STATUS_LABEL = {
  active:   'Active',
  inactive: 'Inactive',
}

export default function CompanyList() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 bg-surface-1 overflow-y-auto">
      <div className="max-w-2xl mx-auto px-8 py-10">
        <div className="mb-6">
          <p className="text-label uppercase text-text-tertiary mb-1">{ORG_NAME}</p>
          <h1 className="text-h2 text-text-primary">Companies</h1>
          <p className="text-caption text-text-tertiary mt-1">{COMPANIES.length} companies</p>
        </div>

        <div className="rounded-md border border-border overflow-hidden bg-surface-0 divide-y divide-border">
          {COMPANIES.map((company) => (
            <button
              key={company.id}
              type="button"
              onClick={() => navigate(`/companies/${company.id}`)}
              className="group flex items-center w-full px-5 py-4 hover:bg-surface-1 transition-colors duration-fast text-left"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-body font-semibold text-text-primary">{company.name}</span>
                  <div className="flex items-center gap-1.5">
                    <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', STATUS_DOT[company.status])} />
                    <span className="text-caption text-text-tertiary">{STATUS_LABEL[company.status]}</span>
                  </div>
                </div>
                <span className="text-caption font-mono text-text-tertiary">{company.siret}</span>
              </div>

              <div className="flex items-center gap-6 mr-4">
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-label uppercase text-text-tertiary">Plan</span>
                  <span className="text-caption text-text-secondary">{company.plan}</span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-label uppercase text-text-tertiary">Employees</span>
                  <span className="text-caption text-text-secondary">{company.employees}</span>
                </div>
              </div>

              <ChevronRight
                size={14}
                className="text-text-tertiary group-hover:text-text-secondary transition-colors duration-fast shrink-0"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
