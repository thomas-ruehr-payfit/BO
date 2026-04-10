import { useParams } from 'react-router-dom'
import Dashboard         from '@/modules/dashboard/Dashboard'
import Dsn               from '@/modules/dsn/Dsn'
import DeclarationSettings from '@/modules/declaration-settings/DeclarationSettings'

const SUB_MAP = {
  dashboard: Dashboard,
  dsn:       Dsn,
  settings:  DeclarationSettings,
}

export default function Declaration() {
  const { sub } = useParams()
  const Sub = SUB_MAP[sub] ?? null
  return Sub ? <Sub /> : null
}
