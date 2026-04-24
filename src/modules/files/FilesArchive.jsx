import { useState } from 'react'
import { Download, Search } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { TH_CLS, TR_CLS } from '@/lib/constants'
import ModuleHeader from '@/components/ModuleHeader'
import Pill from '@/components/Pill'
import { FILES, FILE_CATEGORIES, FILE_MONTHS, PEOPLE } from '@/lib/data'

const CATEGORY_STYLES = {
  Payslips: 'bg-category-payslips-subtle text-category-payslips',
  Exports:  'bg-category-exports-subtle  text-category-exports',
  FSN:      'bg-category-fsn-subtle      text-category-fsn',
  Feedback: 'bg-category-feedback-subtle text-category-feedback',
  Other:    'bg-category-other-subtle    text-category-other',
}

const EMPLOYEE_OPTIONS = [
  'All employees',
  ...PEOPLE.filter((p) => p.portals.includes('collaborator')).map((p) => p.name),
]

export default function FilesArchive() {
  const [search,   setSearch]   = useState('')
  const [category, setCategory] = useState('All categories')
  const [employee, setEmployee] = useState('All employees')
  const [month,    setMonth]    = useState('All months')

  const filtered = FILES.filter((f) => {
    if (search   && !f.name.toLowerCase().includes(search.toLowerCase())) return false
    if (category !== 'All categories' && f.category !== category)         return false
    if (employee !== 'All employees'  && f.employee  !== employee)        return false
    if (month    !== 'All months'     && f.month     !== month)           return false
    return true
  })

  return (
    <section>
      <ModuleHeader title="Files">
        <span className="text-caption text-text-tertiary">
          {filtered.length} of {FILES.length}
        </span>
      </ModuleHeader>

      {/* Filter bar */}
      <div className="flex items-center gap-2 mb-4">
        <div className="relative">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search files…"
            className="pl-8 h-8 text-caption w-52"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="h-8 text-caption w-36"><SelectValue /></SelectTrigger>
          <SelectContent>
            {FILE_CATEGORIES.map((c) => (
              <SelectItem key={c} value={c} className="text-caption">{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={employee} onValueChange={setEmployee}>
          <SelectTrigger className="h-8 text-caption w-40"><SelectValue /></SelectTrigger>
          <SelectContent>
            {EMPLOYEE_OPTIONS.map((e) => (
              <SelectItem key={e} value={e} className="text-caption">{e}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={month} onValueChange={setMonth}>
          <SelectTrigger className="h-8 text-caption w-32"><SelectValue /></SelectTrigger>
          <SelectContent>
            {FILE_MONTHS.map((m) => (
              <SelectItem key={m} value={m} className="text-caption">{m}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-md border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-surface-1 hover:bg-surface-1">
              <TableHead className={cn(TH_CLS, 'pl-4')}>Name</TableHead>
              <TableHead className={TH_CLS}>Category</TableHead>
              <TableHead className={TH_CLS}>Employee</TableHead>
              <TableHead className={TH_CLS}>Month</TableHead>
              <TableHead className={TH_CLS}>Type</TableHead>
              <TableHead className="h-8 py-0 pr-4 w-px" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="py-6 text-center text-caption text-text-tertiary">
                  No files match the current filters.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((file) => (
                <TableRow key={file.id} className={TR_CLS}>
                  <TableCell className="py-2.5 pl-4">
                    <span className="text-body-sm text-text-primary">{file.name}</span>
                  </TableCell>
                  <TableCell className="py-2.5">
                    <Pill className={CATEGORY_STYLES[file.category]}>{file.category}</Pill>
                  </TableCell>
                  <TableCell className="py-2.5 text-caption text-text-secondary">
                    {file.employee ?? <span className="text-text-tertiary">—</span>}
                  </TableCell>
                  <TableCell className="py-2.5 text-caption text-text-secondary">{file.month}</TableCell>
                  <TableCell className="py-2.5">
                    <span className="text-label uppercase font-mono text-text-tertiary">{file.ext}</span>
                  </TableCell>
                  <TableCell className="py-2.5 pr-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 w-7 p-0 text-text-tertiary hover:text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-fast"
                      aria-label="Download"
                    >
                      <Download size={13} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
