package org.KwonEunbi.api.hall.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHall is a Querydsl query type for Hall
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QHall extends EntityPathBase<Hall> {

    private static final long serialVersionUID = 1857889088L;

    public static final QHall hall = new QHall("hall");

    public final ListPath<org.KwonEunbi.api.exhibition.domain.Exhbn, org.KwonEunbi.api.exhibition.domain.QExhbn> exhbnList = this.<org.KwonEunbi.api.exhibition.domain.Exhbn, org.KwonEunbi.api.exhibition.domain.QExhbn>createList("exhbnList", org.KwonEunbi.api.exhibition.domain.Exhbn.class, org.KwonEunbi.api.exhibition.domain.QExhbn.class, PathInits.DIRECT2);

    public final StringPath hallClosed = createString("hallClosed");

    public final StringPath hallImage = createString("hallImage");

    public final StringPath hallInfo = createString("hallInfo");

    public final StringPath hallLocation = createString("hallLocation");

    public final StringPath hallName = createString("hallName");

    public final NumberPath<Long> hallNum = createNumber("hallNum", Long.class);

    public final StringPath hallPnumber = createString("hallPnumber");

    public final StringPath hallTime = createString("hallTime");

    public QHall(String variable) {
        super(Hall.class, forVariable(variable));
    }

    public QHall(Path<? extends Hall> path) {
        super(path.getType(), path.getMetadata());
    }

    public QHall(PathMetadata metadata) {
        super(Hall.class, metadata);
    }

}

