import { LogIn } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ADMINS } from '@/lib/data'

const STATUS_DOT = {
  active:   'bg-status-active',
  invited:  'bg-status-invited',
  disabled: 'bg-status-disabled',
}

const STATUS_LABEL = {
  active:   'Active',
  invited:  'Invited',
  disabled: 'Disabled',
}

const PERMISSION_STYLES = {
  Administrator: 'bg-badge-admin-subtle text-badge-admin',
  Accountant:    'bg-badge-accountant-subtle text-badge-accountant',
}

export default function Admins() {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-h4 text-text-primary">Admins</h2>
        <span className="text-caption text-text-tertiary">{ADMINS.length} members</span>
      </div>

      <div className="rounded-md border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-surface-1 hover:bg-surface-1">
              <TableHead className="text-label uppercase text-text-tertiary font-medium h-8 py-0 pl-4">Name</TableHead>
              <TableHead className="text-label uppercase text-text-tertiary font-medium h-8 py-0">Role</TableHead>
              <TableHead className="text-label uppercase text-text-tertiary font-medium h-8 py-0">Status</TableHead>
              <TableHead className="text-label uppercase text-text-tertiary font-medium h-8 py-0">Permissions</TableHead>
              <TableHead className="h-8 py-0 pr-4 w-px" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {ADMINS.map((admin) => (
              <TableRow
                key={admin.id}
                className="group hover:bg-surface-1 transition-colors duration-fast"
              >
                {/* Name */}
                <TableCell className="py-2.5 pl-4">
                  <div className="flex items-center gap-2">
                    <span className="text-body-sm font-medium text-text-primary">
                      {admin.name}
                    </span>
                    {admin.primaryContact && (
                      <span className="text-label text-text-tertiary">(primary contact)</span>
                    )}
                  </div>
                </TableCell>

                {/* Role */}
                <TableCell className="py-2.5 text-body-sm text-text-secondary">
                  {admin.role}
                </TableCell>

                {/* Status */}
                <TableCell className="py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        'h-1.5 w-1.5 rounded-full shrink-0',
                        STATUS_DOT[admin.status],
                      )}
                    />
                    <span className="text-body-sm text-text-secondary">
                      {STATUS_LABEL[admin.status]}
                    </span>
                  </div>
                </TableCell>

                {/* Permissions */}
                <TableCell className="py-2.5">
                  <div className="flex items-center gap-1">
                    {admin.permissions.map((p) => (
                      <span
                        key={p}
                        className={cn(
                          'text-label px-1.5 py-0.5 rounded',
                          PERMISSION_STYLES[p],
                        )}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </TableCell>

                {/* Action */}
                <TableCell className="py-2.5 pr-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1.5 text-caption text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-fast h-7 px-2"
                  >
                    <LogIn size={12} />
                    Sign in as
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
