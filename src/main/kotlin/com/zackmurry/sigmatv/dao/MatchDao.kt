import com.zackmurry.sigmatv.entity.Match
import java.util.*
import javax.transaction.Transactional

@Transactional
interface MatchDao : JpaResponsitory<Match, UUID> {

}

