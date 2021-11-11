package org.KwonEunbi.api.analysis.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAnalysis is a Querydsl query type for Analysis
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAnalysis extends EntityPathBase<Analysis> {

    private static final long serialVersionUID = 700685830L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAnalysis analysis = new QAnalysis("analysis");

    public final NumberPath<Long> analNum = createNumber("analNum", Long.class);

    public final org.KwonEunbi.api.exhibition.domain.QExhbn exhbn;

    public final ListPath<org.KwonEunbi.api.recommend.domain.Recommend, org.KwonEunbi.api.recommend.domain.QRecommend> recommendList = this.<org.KwonEunbi.api.recommend.domain.Recommend, org.KwonEunbi.api.recommend.domain.QRecommend>createList("recommendList", org.KwonEunbi.api.recommend.domain.Recommend.class, org.KwonEunbi.api.recommend.domain.QRecommend.class, PathInits.DIRECT2);

    public final org.KwonEunbi.api.user.domain.QUserVO user;

    public QAnalysis(String variable) {
        this(Analysis.class, forVariable(variable), INITS);
    }

    public QAnalysis(Path<? extends Analysis> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAnalysis(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAnalysis(PathMetadata metadata, PathInits inits) {
        this(Analysis.class, metadata, inits);
    }

    public QAnalysis(Class<? extends Analysis> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.exhbn = inits.isInitialized("exhbn") ? new org.KwonEunbi.api.exhibition.domain.QExhbn(forProperty("exhbn"), inits.get("exhbn")) : null;
        this.user = inits.isInitialized("user") ? new org.KwonEunbi.api.user.domain.QUserVO(forProperty("user")) : null;
    }

}

