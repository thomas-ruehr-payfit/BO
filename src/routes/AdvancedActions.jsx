import { useParams } from 'react-router-dom'
import Onboarding          from '@/modules/onboarding/Onboarding'
import Registration        from '@/modules/registration/Registration'
import Churned             from '@/modules/churned/Churned'
import Delete              from '@/modules/delete/Delete'
import EnvironmentMigration from '@/modules/environment-migration/EnvironmentMigration'
import OperationsImport    from '@/modules/operations-import/OperationsImport'

export default function AdvancedActions() {
  const { sub } = useParams()

  if (sub === 'operations') return (
    <>
      <Onboarding />
      <Registration />
      <Churned />
      <Delete />
    </>
  )
  if (sub === 'migration') return <EnvironmentMigration />
  if (sub === 'import')    return <OperationsImport />
  return null
}
